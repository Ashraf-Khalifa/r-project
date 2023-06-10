import React from 'react'

export default function Section() {
  return (
    <>
        <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="section-title" style={{ margin:'20px'}}>
      <h2>About us</h2>
      <p>Why tourism in Jordan</p>
    </div>
    <div className="row">
      <div
        className="col-lg-6 order-1 order-lg-2"
        data-aos="fade-left"
        data-aos-delay={100}
      >
        <img src="/public/the-inside-petra-guide.jpg" className="img-fluid" alt="" />
      </div>
      <div className="cont col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
        <h3 style={{ color: 'black', margin:'20px'}}>Tourism in Jordan offers a rich and diverse experience for travelers.</h3>
        <br />
        <br />
        <p className="content" style={{ color: 'black',margin:'20px'}}>
        Jordan is home to numerous historical and cultural treasures, including the ancient city of Petra, a UNESCO World Heritage Site and one of the New Seven Wonders of the World. Other notable attractions include the Roman ruins at Jerash, the Desert Castles, and the crusader-era Ajloun Castle. Jordan's rich history and archaeological sites provide a fascinating glimpse into civilizations that span thousands of years.
        Jordan is a haven for adventure enthusiasts. Travelers can embark on thrilling activities such as hiking, trekking, rock climbing, canyoning, and diving in the Red Sea. The country's diverse terrain provides ample opportunities for outdoor adventures and unforgettable experiences.

        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

