import { redirect, type ActionFunctionArgs } from 'react-router';

export async function contactSubmissionAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const searchParams = new URLSearchParams();

  const name = formData.get('name');
  const email = formData.get('email');

  if (typeof name === 'string' && name.trim()) {
    searchParams.set('name', name.trim());
  }

  if (typeof email === 'string' && email.trim()) {
    searchParams.set('email', email.trim());
  }

  return redirect(`/contact/submitted?${searchParams.toString()}`);
}