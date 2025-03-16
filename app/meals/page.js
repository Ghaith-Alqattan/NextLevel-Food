import MealsGrid from '@/components/meals/meals-grid'
import Link from 'next/link'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import LoadingMeals from './loading-out'

export const metadata = {
  title: 'NextLevel | All Meals',
  description: 'Browse the delicious shared meals by our community',
}

async function Meals() {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

export default function page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals , created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. Its easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={'/meals/share'}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
