import React from "react";
import { Link, Outlet } from "react-router-dom";

function ForSikl() {
  return (
    <div className="container">
      <div className="forsikl-page">
        <div className="forsikl-page__wrap">
          <h1 className="title">For Sikl Operatori</h1>
          <div className="forsikl-page__buttons">
            <Link className="oretical-information link" to="nazariymalumot">
              Nazariy ma'lumot
            </Link>
            <Link className="presentation link">Prezentatsiya</Link>
            <Link
              className="tutorial link"
              to="https://www.youtube.com/watch?v=fPZTdfKdBgM&list=PL577FD9B101737234&index=8"
            >
              Video darslik
            </Link>
            <Link
              className="test link"
              to="https://docs.google.com/document/d/1s4EVyl764-8UhgIZtaE-qGIC5YTsTvqZq8XmozwBogg/edit?usp=sharing"
            >
              Test
            </Link>
            <Link
              className="image link"
              to="https://docs.dot-net.uz/~gitbook/image?url=https%3A%2F%2F2189654329-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-ML4YbrwilsjU6IyB7jd%252F-Maueztfd5BpKv11FZ_m%252F-Mauf0Frk72lvsdjMwhm%252Fimage.png%3Falt%3Dmedia%26token%3D5fa64fb2-ebec-4b18-9d5e-7d284e0819e8&width=768&dpr=4&quality=100&sign=f6572f9&sv=1"
            >
              Rasm
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ForSikl;
