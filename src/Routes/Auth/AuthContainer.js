import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN, CREATE_ACCOUNT } from './AuthQueries';
import { toast } from 'react-toastify';

export default () => {
	const [action, setAction] = useState('logIn');
	const username = useInput('');
	const firstName = useInput('');
	const lastName = useInput('');
	const secret = useInput('');
	const email = useInput('ashburn1207@gmail.com');
	const [requestSecretMutation] = useMutation(LOG_IN, {
		variables: { email: email.value }
	});
	const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
		variables: {
			email: email.value,
			username: username.value,
			firstName: firstName.value,
			lastName: lastName.value
		}
	});

	const onSubmit = async e => {
		e.preventDefault();
		if (action === 'logIn') {
			if (email.value !== '') {
				try {
					const {
						data: { requestSecret }
					} = await requestSecretMutation();
					if (!requestSecret) {
						toast.error(`You don't have an account yet, create one`);
						setTimeout(() => setAction('signUp'), 3000);
					} else {
						toast.success('Check your email for your login secret');
						setAction('confirm');
					}
				} catch {
					toast.error("Can't request secret, try again");
				}
			} else {
				toast.error('Email is required');
			}
		} else if (action === 'signUp') {
			if (
				email.value !== '' &&
				username.value !== '' &&
				firstName.value !== '' &&
				lastName.value !== ''
			) {
				try {
					const {
						data: { createAccount }
					} = await createAccountMutation();
					if (!createAccount) {
						toast.error("Can't create account");
					} else {
						toast.success('Account created! Log In now');
						setTimeout(() => setAction('logIn'), 3000);
					}
				} catch (e) {
					toast.error(e.message);
				}
			} else {
				toast.error('All field are required');
			}
		}
	};

	return (
		<AuthPresenter
			setAction={setAction}
			action={action}
			username={username}
			firstName={firstName}
			lastName={lastName}
			email={email}
			secret={secret}
			onSubmit={onSubmit}
		/>
	);
};