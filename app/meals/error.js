'use client'
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error Happened!</h1>
      <p>failed to fetch meal data , please try again later</p>
    </main>
  )
}
