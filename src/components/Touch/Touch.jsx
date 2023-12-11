import CountUp from 'react-countup';
import Swal from "sweetalert2";

const Touch = () => {
  const handleSend = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for your message mr," +name,
      html: `
      <p>We will contact you very soon</p>
      <br>
        <p><strong>Your Sending info</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      showConfirmButton: false,
      timer: 3000,
    });
    e.target.reset();
  };
  return (
    <div className="my-12">
        <div className="hero lg:min-h-screen ">
          <div className="hero-content flex lg:gap-16 justify-center flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-right">
              <h1 className="text-2xl lg:text-6xl text-center font-bold">
                Design and Innovation
              </h1>
              <p className="text-xl lg:text-3xl lg:my-16 py-10">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam
              </p>
              <div className="flex text-center gap-6 justify-center">
                <div className="shadow-2xl lg:p-7 rounded-xl">
                  <p className="lg:text-5xl"><CountUp end={100} />K+</p>
                  
                  <p className="lg:text-2xl py-3">Compleate Project</p>
                </div>
                <div className="shadow-2xl lg:p-7 rounded-xl">
                  <p className="lg:text-5xl"><CountUp end={700} />+</p>
                  <p className="lg:text-2xl py-3">Client Review</p>
                </div>
              </div>
            </div>
            <div className="card max-w-sm lg:max-w-lg shadow-2xl ">
              <h2 className="text-3xl font-bold ml-8">GET TOUCH ME?</h2>
              <p className="text-xl ml-8 mt-5">
                For your car we will do everything advice design in us repairs
                and maintenance We are the some preferred.
              </p>
              <form className="card-body text-black" onSubmit={handleSend}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="rounded"
                    name="message"
                    cols="60"
                    placeholder="Type your message"
                    rows="8"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Touch;
