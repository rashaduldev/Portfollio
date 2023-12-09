const Touch = () => {
  return (
    <div className="my-12">
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex gap-10 jusb flex-col lg:flex-row-reverse">
            <div className="flex-1">
              <h1>Design and Innovation</h1>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit <br />
                auting fugit sed thisnquia consequuntur magni dolores eos <br />
                designer heresm qui ratione voluptatem sequi nesciuNeque porro <br />
                quisquam est, oursqui dolorem ipsum quia dolor sit amet 
                consectetur, adipisci velit, sed quia non numquam
              </p>
              <div>
                <div>
                  <p>10K+</p>
                  <p>Compleate Project</p>
                </div>
                <div>
                  <p>800+</p>
                  <p>Client Review</p>
                </div>
              </div>
            </div>
            <div className="card w-full max-w-lg shadow-2xl flex-1">
                <h2>GET TOUCH ME?</h2>
                <p>For your car we will do everything advice design in us repairs and maintenance We are the some preferred.</p>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                <textarea className="rounded" name="" id="" cols="60" placeholder="Type your message" rows="10"></textarea>
                </div>
               
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
