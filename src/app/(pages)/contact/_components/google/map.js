import { setting } from '@/data/setting'

export default function Map() {
    return (
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            {/* Google Map Iframe Embeded */}
            <iframe
                width="100%"
                loading="lazy"
                allowfullscreen=""
                className="h-[80vh]"
                title={setting?.name}
                style={{ border: 0 }}
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2307445700026!2d78.06212111044397!3d30.287492074697038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929213eed3c2f%3A0x84e02c81ade41cde!2sAustralian%20Gol%20Guppay%20Wala!5e0!3m2!1sen!2sin!4v1701294052138!5m2!1sen!2sin"
            ></iframe>
        </div>
    )
}
