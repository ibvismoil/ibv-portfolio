import { Download, Instagram, Linkedin, LocationEdit, Mail, PhoneCall, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon, LinkedIn, TelegramIcon } from '../assets/icon';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', number: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

 
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = '/files/Ibrgimov Ismoil.pdf'; // путь к файлу в public/
            link.download = 'Ibrgimov Ismoil.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, number, message } = form;
        if (!name || !number || !message) {
            setStatus('❗ Please fill in all fields');
            return;
        }

        setStatus('Sending...');

        const botToken = '8084948277:AAHL2Ls7E8F94CIpM9Abe_f3lUjHmNXGNLY';
        const chatId = '6634436743';
        const text = `
 Новое сообщение с сайта:
 Name: ${name}
 Phone Number: ${number}
 Messges: ${message}
`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                }),
            });

            if (res.ok) {
                setStatus('Send');
                setForm({ name: '', number: '', message: '' });
            } else {
                throw new Error('Sending error');
            }
        } catch (err) {
            console.error(err);
            setStatus('❌ Error sending. Try again later.');
        }
    };


    return (
        <div id='contact' className='containers mb-6'>
            <h1 className="text-3xl font-bold mt-5 mb-6 justify-center items-center text-center">Contact</h1>
            <div className='flex flex-col md:flex-row gap-8 justify-between m-auto max-w-[1000px] px-4'>
                <div>
                    <h2 className='mb-2'>Contact Information</h2>
                    <div className="flex items-center gap-4 bg-gradient-to-r mb-2 p-4 rounded-lg border">
                        <div className="p-3 max-[500px]:p-2 rounded-full">
                            <Mail className="w-6 h-6 max-[500px]:w-5 max-[500px]:h-5" />
                        </div>
                        <div>
                            <p className="text-sm">Email</p>
                            <p className="font-semibold max-[500px]:text-sm">ismoil281279@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-gradient-to-r mb-2 p-4 rounded-lg border">
                        <div className="p-3 max-[500px]:p-2 rounded-full">
                            <PhoneCall className="w-6 h-6 max-[500px]:w-5 max-[500px]:h-5" />
                        </div>
                        <div>
                            <p className="text-sm">Phone Number</p>
                            <p className="font-semibold max-[500px]:text-sm">+998 (94) 722-45-20</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-gradient-to-r p-4 rounded-lg border">
                        <div className="p-3 max-[500px]:p-2 rounded-full">
                            <LocationEdit className="w-6 h-6 max-[500px]:w-5 max-[500px]:h-5" />
                        </div>
                        <div>
                            <p className="text-sm">Location</p>
                            <p className="font-semibold max-[500px]:text-xs">Uzbekistan, Tashkent, <br /> Mirzo Ulugbek, Parkent 2/39</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 p-4 rounded-lg border">
                        <Link to="https://github.com/ibvismoil"><span><GitHubIcon className='w-[24px] h-[24px]' /></span></Link>
                        <Link to="https://www.instagram.com/ibragimov.carsuz?igsh=MW5mem1qc3NqZHBpaw=="><span><Instagram className='w-[24px] h-[24px]' /></span></Link>
                        <Link to="https://t.me/ibragimov_carsuz"><span><TelegramIcon className='w-[24px] test h-[24px]' /></span></Link>
                        <Link to="https://www.linkedin.com/in/ismoil-ibragimov79"><span><Linkedin className='w-[24px] test h-[24px]' /></span></Link>
                        <button className='cursor-pointer text-gray-400 hover:text-emerald-600 text-sm flex gap-2 items-center' onClick={handleDownload}>
                            Download Resume <Download width={15} height={15}/>
                        </button>
                    </div>
                </div>
                <div>
                    <h3>Messages</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[500px] gap-4 mt-2">
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="p-2 border rounded test" />
                        <input name="number" type="number" value={form.number} onChange={handleChange} required placeholder="Phone number" className="test p-2 border rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Messages" className="p-2 border rounded h-32 test" />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 flex items-center gap-1.5 rounded hover:bg-blue-700 justify-center transition">Send Messages <Send width={15} height={15}/></button>
                        <p className={`text-sm ${status.includes('❌') || status.includes('❗') ? 'text-red-600' : 'text-green-600'}`}>
                            {status}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
