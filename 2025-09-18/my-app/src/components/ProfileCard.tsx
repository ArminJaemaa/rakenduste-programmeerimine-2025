import styles from "../Modules/ProfileCard.module.css"

function ProfileCard() {
  return (
    <>
      <div className={styles.card}>
        <h1>Armin Jaemaa</h1>
        <ul>
          <strong>hobid:</strong>
          <li>jõusaal</li>
          <li>reisimine</li>
          <li>arvutimängud</li>
        </ul>
        <form>
          <div className={styles.field}>
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              placeholder="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="txt">text:</label>
            <input
              type="text"
              id="txt"
            />
          </div>
        </form>
        <button>nupp</button>
      </div>
    </>
  )
}

export default ProfileCard
