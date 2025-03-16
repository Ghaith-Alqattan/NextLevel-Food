import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealID)
  return {
    title: `NextLevel | ${meal.title}`,
    description: meal.summary,
  }
}

export default async function page({ params }) {
  const meal = await getMeal(params.mealID)
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>name</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  )
}
