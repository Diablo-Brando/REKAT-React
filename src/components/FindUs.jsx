import { MapPin, Clock } from 'lucide-react';
import Reveal from './Reveals';

function FindUs() {
  return (
    <section id="find-us" className="find-us">
      <div className="container find-us__inner">
        <Reveal className="find-us__text">
          <h2>Find Us Online & Our Weekend Stand!</h2>
          <p>
            Craving a sweet treat right now? Catch us on Instagram 
            or visit our weekend stand for a fresh pick-up while
            it's still warm.
          </p>

          <div className="find-us__info">
            <MapPin size={20} />
            <span>Lapangan Batununggal, Bandung, West Java</span>
          </div>
          <div className="find-us__info">
            <Clock size={20} />
            <span>Saturday & Sunday, 07:00 - 13:00</span>
          </div>
        </Reveal>
        
        <Reveal delay={150}>
          <iframe
          className="find-us__map"
          title="Lokasi Ovelia Bakes"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4001.719822651648!2d107.6251937750441!3d-6.954348693045961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e85be1398abb%3A0x988e2ec2d9f91254!2sLapangan%20Batu%20Nunggal%20Indah!5e1!3m2!1sen!2sid!4v1790563839304!5m2!1sen!2sid"
          loading="lazy"
        />
        </Reveal>
      </div>
    </section>
  );
}

export default FindUs;