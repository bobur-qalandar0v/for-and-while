import React from "react";
import { Link, Outlet } from "react-router-dom";

function WhileSikl() {
  return (
    <div className="container">
      <div className="whilesikl-page">
        <div className="whilesikl-page__wrap">
          <h1 className="title">While Sikl Operatori</h1>
          <div className="whilesikl-page__buttons">
            <Link className="oretical-information link" to="Nazariymalumot">
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
              to="https://docs.google.com/document/d/1LDdctpHW08pPjKWwkyUn0nfV1rhMneG9vY6aLUnNf0A/edit?usp=sharing"
            >
              Test
            </Link>
            <Link
              className="image link"
              to="https://docs.dot-net.uz/~gitbook/image?url=https%3A%2F%2F2189654329-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-ML4YbrwilsjU6IyB7jd%252F-MLTTToTUvge4f0XSH_c%252F-MLTYCHZp-ykZ50t8PTc%252Fwhile.jpg%3Falt%3Dmedia%26token%3D1eff9b56-b9ab-45ed-85b3-6b0a2e0b1f8e&width=768&dpr=1&quality=100&sign=811101a&sv=1"
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

export default WhileSikl;
