<template>
	<section id="contact" class="contact">
		<h2>Contact</h2>
		<form class="form-box" @submit="onSubmit" data-aos="fade-up">
			<div class="form-item">
				<input id="name" v-model="name" name="name" aria-describedby="error-name-required" placeholder="Name" autoComplete="name">
				<span v-if="errors.name" id="error-name-required" aria-live="assertive">
					{{ errors.name }}
				</span>

				<input id="email" v-model="email" name="email" type="email" placeholder="Email" autoComplete="email">
				<span v-if="errors.email" id="error-email-required" aria-live="assertive">
					{{ errors.email }}
				</span>

				<textarea id="message" v-model="message" name="message" placeholder="Message"/>
				<span v-if="errors.message" id="error-message-required" aria-live="assertive">
					{{ errors.message }}
				</span>

				<button class="submit-btn" type="submit">Submit</button>
			</div>
		</form>

		<p class="recaptcha">This site is protected by reCAPTCHA and the Google<br>
			<a href="https://policies.google.com/privacy">Privacy Policy</a> and
			<a href="https://policies.google.com/terms">Terms of Service</a> apply.
		</p>
	</section>
</template>
<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

const schema = {
  name (value: string) {
    if (!value) {
      return 'Name is required'
    }
    return true
  },
  email (value: string) {
    if (!value) {
      return 'Email is required'
    }
    return true
  },
  message (value: string) {
    if (!value) {
      return 'Message is required'
    }
    return true
  }
}

const { useFieldModel, handleSubmit, errors } = useForm({
  validationSchema: schema
})

const [name, email, message] = useFieldModel(['name', 'email', 'message'])

const { vueApp } = useNuxtApp()
	vueApp.use(VueReCaptcha, {
	siteKey: '6Lf8DVUoAAAAAOj7-WXMaIfuRlWpmcpbp48ay4oc',
	loaderOptions: {
		renderParameters: {
			hl: 'en'
		}
	}
})
const recaptchaInstance = useReCaptcha()

const onSubmit = handleSubmit(async (values) => {
	await recaptchaInstance?.recaptchaLoaded()
	const token = await recaptchaInstance?.executeRecaptcha('submit')
	values.googleReCaptchaToken = token

	const formData = new FormData()
	Object.entries(values).forEach(([key, value]) => {
		formData.append(key, value)
	})

	try {
		const response = await fetch('https://shim.form.newt.so/v1/vUf_6rML6', {
			method: 'POST',
			body: formData,
			headers: {
			Accept: 'application/json'
		}
	})

	if (response.ok) {
		await navigateTo('/thanks')
	} else {
		await navigateTo('/error')
	}
	} catch (err) {
		await navigateTo('/error')
	}
})
</script>