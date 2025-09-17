import { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";

function ProfilePage() {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/1"); // por ejemplo, ID 1
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error al cargar el usuario", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={`${styles.profileContainer} ${styles.pageContainer}`}>
      
      {/* PROFILE HEADER */}
      <section className={styles.profileHeader}>
        <img 
          src={user.image_url || "https://i.pinimg.com/736x/f2/a0/e2/f2a0e2abaa5b3853f9cdfec4ec07cb8b.jpg"}
          alt="User avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2>{user.name}</h2>
          <p className={styles.userTag}>@{user.username}</p>
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
