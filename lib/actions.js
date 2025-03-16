'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'), // This is a File object
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  console.log(meal)

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || // Ensure image is present
    meal.image.size === 0 // Ensure image is not empty
  ) {
    return { message: 'Invalid input.' }
  }

  revalidatePath('/meals')
  await saveMeal(meal)
  redirect('/meals')
}
