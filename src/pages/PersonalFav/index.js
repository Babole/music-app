import React from "react";

import { FaveButton } from "../../components";
import './style.css'

function PersonalFav() {
  return (
    <main>
      <div className="p-3 pb-0 d-flex flex-row">
        <div className="d-flex flex-column justify-content-center">
          <img className="artistPhoto" src="https://i.scdn.co/image/ab6761610000e5ebfab3b4db1399e73e6894c12b" alt="artist" />
        </div>
        <div className="px-3 d-flex flex-column">
          <h2 className="mb-0">Grasu XXL</h2>
          <p className="mb-0">Genre: Romanian rap</p>
          <p>Dragoș Nichifor, better known for his stage name Grassu XXL, is a romanian rapper. Born in 1981 he has been making music since the age if 14, releasing his first record in 1999. Here are some of the most popular singles of the artist.</p>
        </div>
      </div>
      <div className="p-3 d-flex flex-row">
        <div>
          <img src="https://t2.genius.com/unsafe/905x0/https%3A%2F%2Fimages.genius.com%2F4323b67c1095f7c671d2d549faa84458.1000x1000x1.png" alt="curaj album cover" />
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="mb-0">Song: Fara Filtru</p>
              <p>Album: Curaj</p>
            </div>
            <FaveButton />
          </div>
        </div>
        <div className="ms-5">
          <img src="https://t2.genius.com/unsafe/298x298/https%3A%2F%2Fimages.genius.com%2F786ec60e9477fcfe58d0d77aa3d4c54f.800x800x1.jpg" alt="turbofin single cover" />
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="mb-0">Song: Turbofin</p>
              <p>Album: Drumul spre succes</p>
            </div>
            <FaveButton />
          </div>
        </div>
        <div className="ms-5">
          <img src="https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F582ef1fe676a0905c1f3d88d727f363f.1000x1000x1.jpg" alt="in labirind album cover" />
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="mb-0">Song: Soareci in Labirint</p>
              <p>Album: In labirind</p>
            </div>
            <FaveButton />
          </div>
        </div>
        <div className="ms-5">
          <img src="https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F7d937df6d95d33d467d088a1519c2116.1000x1000x1.png" alt="drumul spre succes album cover" />
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="mb-0">Song: Dl. Destin</p>
              <p>Album: Drumul spre succes</p>
            </div>
            <FaveButton />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PersonalFav;
