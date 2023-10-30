const Contact = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-full lg:text-left">
                        <img className="w-full" src="https://i.ibb.co/9tyhmWS/best-contact-us-page-designs.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered textarea-success" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered textarea-success" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-success" placeholder="Type here..."></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#14E8E8] hover:bg-[#14E8E8] text-black btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;