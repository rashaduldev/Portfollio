const Experience = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Experience</h1>
      <div className="divider divider-accent mx-28"></div>
      <div className="card flex flex-col lg:flex-row card-side mx-10 shadow-xl my-10">
        <figure>
          <img
            className="h-full rounded-r-2xl"
            src="https://i.ibb.co/xgz2gT6/ads.jpg"
            alt="uysystems"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-center lg:text-left">PHP and LARAVEL DEVELOPER</h2>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold text-yellow-300 text-center lg:text-left">Internship</p>
              <p className="text-3xl text-center lg:text-left">BackEnd Developer</p>
              <p className="text-xl text-center lg:text-left">
                Duration: 3 Months (August 2023-November 2023)
              </p>
              <p className="text-2xl text-center lg:text-left">
                Location:{" "}
                <span>
                  <a href="#">Wareless gate mohakhali</a>
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-center lg:text-left">
              Teck Stack:(Tailwind, JavaScript, PHP, Laravel)
            </p>
          </div>
          <div>
            <p className="text-2xl text-center lg:text-left">Management:</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-evenly">
              <div className="text-center shadow-2xl p-2 rounded-lg">
                <div>
                  <img
                    className="w-28 h-28 rounded-full mx-auto my-2"
                    src="https://i.ibb.co/tXRL5Rh/moon.png"
                    alt=""
                  />
                  <div className="">
                    <p className="text-lg">Project Manager</p>
                    <p>Name:..... islam Moon</p>
                    <p>Email:..... islammoon@gmail.com</p>
                    <p className="font-bold">
                      <a
                        className="underline"
                        href="https://uylab.netlify.app/"
                      >
                        UYlab
                      </a>{" "}
                      & UYsystems
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center shadow-2xl p-2 rounded-lg">
                <img
                  className="w-28 h-28 rounded-full mx-auto my-2"
                  src="https://i.ibb.co/j6VvqdS/uzzol.png"
                  alt=""
                />
                <p className="text-lg">FullStack Developer</p>
                <p>
                  <span className="font-bold">Name:</span> Saidul Islam Uzzal
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  saidulislam@gmail.com
                </p>
                <p className="font-bold">
                  IT Head of{" "}
                  <a
                    className="underline"
                    href="https://www.creativeitinstitute.com/"
                  >
                    Creative IT
                  </a>
                </p>
              </div>
              <div className="text-center shadow-2xl p-2 rounded-lg">
                <img
                  className="w-28 h-28 rounded-full mx-auto my-2"
                  src="https://i.ibb.co/GRMz3Jy/farhan.jpg"
                  alt=""
                />
                <p>Name:Md Farhan Sadiq</p>
                <p>Email:Md Farhan Sadiq</p>
                <p>Javascript Developer</p>
                <p className="font-bold">
                  <a
                    className="underline"
                    href="https://innovativeitsolutionsltd.com/"
                  >
                    Innovative IT Solutions Limited
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card flex flex-col lg:flex-row-reverse card-side mx-10 shadow-xl my-10 max-h-screen">
        <figure className="flex-1">
          <img
            className="h-full w-full rounded-r-2xl"
            src="https://i.ibb.co/PgSCTJT/shop.jpg"
            alt="uysystems"
          />
        </figure>
        <div className="pl-3 pt-5">
          <h1 className="text-5xl font-bold text-center">ShopUp</h1>
          <div className="divider divider-accent mx-10"></div>
          <h2 className="card-title flex justify-center text-3xl text-center lg:text-left">IT OFFICER</h2>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold text-yellow-300  text-center lg:text-left">Full-Time</p>
              <p className="text-xl">
                <span className="font-bold flex justify-center text-center lg:text-left">Duration:</span> 1 years 1 Months
                (july 2022-August 2023)
              </p>
              <p className="text-2xl text-center lg:text-left">
                Location:{" "}
                <span>
                  <a href="#">Sukrabad, Dhanmondi 32</a>
                </span>
              </p>
              <p className="text-xl text-center lg:text-left">Brance: Robi Dhanmondi (ROBI & AIRTEL)</p>
              <p className="text-lg text-center lg:text-left">
                Tech-Stack: MS-Word, MS-Excel , Powerpoint
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl text-center lg:text-left">Management:</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-evenly">
              <div className="text-center shadow-2xl p-2 rounded-lg">
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-lg">Project Manager</p>
                    <p>Name:..... </p>
                    <p>Email:..... ...........@gmail.com</p>
                    <p className="font-bold">
                      <a
                        className="underline"
                        href="https://shopup.com.bd/store/"
                      >
                        ShopUp
                      </a>{" "}
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
