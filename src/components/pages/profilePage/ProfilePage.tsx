import styles from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div className={`${styles.profileContainer} ${styles.pageContainer}`}>
      
      {/* PROFILE HEADER */}
      <section className={styles.profileHeader}>
        <img 
          src="https://i.pinimg.com/736x/f2/a0/e2/f2a0e2abaa5b3853f9cdfec4ec07cb8b.jpg" 
          alt="User avatar" 
          className={styles.avatar} 
        />
        <div className={styles.userInfo}>
          <h2>Name</h2>
          <p className={styles.userTag}>@username</p>
          <button className={styles.editBtn}>Edit profile</button>
        </div>
      </section>

      {/* PROFILE CONTENT GRID */}
      <section className={styles.profileContent}>
        <div className={styles.card}>📚 Reading Lists</div>
        <div className={styles.card}>✍️ Reviews</div>
        <div className={styles.card}>📊 Statistics</div>
      </section>
    </div>
  );
}

export default ProfilePage;
