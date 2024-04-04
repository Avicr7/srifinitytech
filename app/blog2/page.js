import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={6} breadcrumbTitle="Blog ">
                    <div className="cloginner-3-sevtion-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="blog2-author-area">
                                        <div className="blog2-images">
                                            <img src="/assets/images/sectionimg/blog2-img.png" alt="" />
                                        </div>
                                        <div className="blog-auhtor2-text blog2-author-poition ">
                                            <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                                                <div className="blog-date-list margin-b">
                                                    <img src="/assets/images/icons/daterange1.png" alt="" />
                                                    <Link href="#" className="font-16 lineh-16 font-ks weight-600 color">5 April 2024</Link>
                                                </div>
                                                <Link href="/blogmiddle">
                                                    <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">Empowering Your Business with the Power Platform </h1>
                                                </Link>
                                                <p className="font-16 font-ks lineh-26 weight-400 color">In today's hyper-competitive business landscape, organizations are constantly seeking ways to drive innovation,enhance productivity, and deliver superior experiences to customers and employees.  </p>
                                                <Link href="/blogmiddle" className="font-16 font-ks weight-700 color lineh-26 margin-t24 d-inline-block learn-more learn-more1">Learn
                                                    More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-auhtor2-text margin-b30 ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="/blogmiddle2" className="font-16 lineh-16 font-ks weight-500 color-17">1 April 2024</Link>
                                            </div>
                                            <Link href="/blogmiddle2">
                                                <h1 className="font-20 font-lora color-17 lineh-20 weight-600 margin-b14">Exploring the Power Platform's Impact Across Industries </h1>
                                            </Link>
                                            <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">In today's digital age, organizations across industries are harnessing the power of technology to drive innovation, streamline operations, and enhance productivity. </p>
                                            <Link href="/blogmiddle2" className="font-16 font-ks weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="blog-auhtor2-text ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="/blogmiddle3" className="font-16 lineh-16 font-outfit weight-500 color-17">1 April 2024</Link>
                                            </div>
                                            <Link href="/blogmiddle3">
                                                <h1 className="font-20 font-outfit color-17 lineh-20 weight-600 margin-b14">Rise of Power Apps in Modern App Development </h1>
                                            </Link>
                                            <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">In the ever-evolving landscape of technology, the emergence of low-code and no-code development platforms has revolutionized the way applications are built and deployed. </p>
                                            <Link href="/blogmiddle3" className="font-16 font-outfit weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row align-items-center margin-t60">
                                <div className="col-lg-6">
                                    <div className="blog2-author-area">
                                        <div className="blog2-images">
                                            <img src="/assets/images/sectionimg/bloginner-2.png" alt="" />
                                        </div>
                                        <div className="blog-auhtor2-text blog2-author-poition ">
                                            <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                                                <div className="blog-date-list margin-b">
                                                    <img src="/assets/images/icons/daterange1.png" alt="" />
                                                    <Link href="#" className="font-16 lineh-16 font-ks weight-600 color">5 Nov 2023</Link>
                                                </div>
                                                <Link href="/blogmiddle">
                                                    <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">Strategies based on
                                                        new data and changing market </h1>
                                                </Link>
                                                <p className="font-16 font-ks lineh-26 weight-400 color">Include any additional information
                                                    that may be or helpful for visitors, such as FAQs, pricing options, or service
                                                    packages. </p>
                                                <Link href="/blogmiddle" className="font-16 font-ks weight-700 color lineh-26 margin-t24 d-inline-block learn-more learn-more1">Learn
                                                    More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-auhtor2-text margin-b30 ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="#" className="font-16 lineh-16 font-ks weight-500 color-17">5 Nov 2023</Link>
                                            </div>
                                            <Link href="/blogmiddle">
                                                <h1 className="font-20 font-lora color-17 lineh-20 weight-600 margin-b14">At Your Consulting
                                                    Company we in helping businesses</h1>
                                            </Link>
                                            <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">Share real-life case
                                                studies and success stories that highlight the of your consulting services. Detail the
                                                challenges faced by your clients sucess.</p>
                                            <Link href="/blogmiddle" className="font-16 font-ks weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="blog-auhtor2-text ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="#" className="font-16 lineh-16 font-outfit weight-500 color-17">5 Nov 2023</Link>
                                            </div>
                                            <Link href="/blogmiddle">
                                                <h1 className="font-20 font-outfit color-17 lineh-20 weight-600 margin-b14">Our team of
                                                    skilled analysts and consultants can assist you</h1>
                                            </Link>
                                            <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">Approach: Emphasize
                                                your client-centric approach and how you your consulting services to meet the specific
                                                needs and goals of each client.</p>
                                            <Link href="/blogmiddle" className="font-16 font-outfit weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="row align-items-center margin-t60">
                                <div className="col-lg-6">
                                    <div className="blog2-author-area ">
                                        <div className="blog2-images">
                                            <img src="/assets/images/sectionimg/bloginner-3.png" alt="" />
                                        </div>
                                        <div className="blog-auhtor2-text blog2-author-poition ">
                                            <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                                                <div className="blog-date-list margin-b">
                                                    <img src="/assets/images/icons/daterange1.png" alt="" />
                                                    <Link href="#" className="font-16 lineh-16 font-ks weight-600 color">5 Nov 2023</Link>
                                                </div>
                                                <Link href="/blogmiddle">
                                                    <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">Identify
                                                        implement the right technological solutions</h1>
                                                </Link>
                                                <p className="font-16 font-ks lineh-26 weight-400 color">Include any additional information
                                                    that may be or helpful for visitors, such as FAQs, pricing options, or service
                                                    packages. </p>
                                                <Link href="/blogmiddle" className="font-16 font-ks weight-700 color lineh-26 margin-t24 d-inline-block learn-more learn-more1">Learn
                                                    More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-auhtor2-text margin-b30 ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="#" className="font-16 lineh-16 font-ks weight-500 color-17">5 Nov 2023</Link>
                                            </div>
                                            <Link href="/blogmiddle">
                                                <h1 className="font-20 font-lora color-17 lineh-20 weight-600 margin-b14">Involve employees
                                                    and key stakeholders in the change process</h1>
                                            </Link>
                                            <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">Share real-life case
                                                studies and success stories that highlight the of your consulting services. Detail the
                                                challenges faced by your clients sucess.</p>
                                            <Link href="/blogmiddle" className="font-16 font-ks weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                    <div className="blog-auhtor2-text ">
                                        <div className="blog2-ahtuor2 blog2inner">
                                            <div className="blog-date-list margin-b">
                                                <img src="/assets/images/icons/daterane.png" alt="" />
                                                <Link href="#" className="font-16 lineh-16 font-outfit weight-500 color-17">5 Nov 2023</Link>
                                            </div>
                                            <Link href="/blogmiddle">
                                                <h1 className="font-20 font-outfit color-17 lineh-20 weight-600 margin-b14">Identify and
                                                    empower change champions within organization</h1>
                                            </Link>
                                            <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">Approach: Emphasize
                                                your client-centric approach and how you your consulting services to meet the specific
                                                needs and goals of each client.</p>
                                            <Link href="/blogmiddle" className="font-16 font-outfit weight-700 color-17 lineh-26 d-inline-block learn-more">Learn
                                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="row">
                                <div className="col-lg-12 text-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination margin-t60">
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </Link>
                                            </li>
                                            <li className="page-item pagecolor"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">12</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/*===== BLOG 3 END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get In Touch
</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">Embark on a journey of digital transformation with Srifinity Tech. Contact us today to discover how our expertise and commitment to excellence can elevate your business to new heights.
                                   Admin@srifinity.com, Avishek@srifinity.com +977-9767584593
                                    Thank you for choosing Srifinity Tech – where innovation meets reliability for your business success!</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact2" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get  Advice
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
            </Layout>
        </>
    )
}