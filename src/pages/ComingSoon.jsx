import appLogo1 from '../assets/Combination-Color GCGroup 1 (1).png'
import appLogo2 from '../assets/Combination-Color GCGroup 1.png'

const ComingSoon = () => {
    return (
        <main className='bg-black min-h-screen text-center text-white font-aeonik pt-8'>
            <div className='px-6'>
                <img src={appLogo1} alt="app logo" className='h-[84px] mx-auto block' />
                <h1 className='text-lg mt-12 tracking-[1px]'>WE ARE ALMOST THERE</h1>
                <h2 className='text-5xl md:text-6xl lg:text-8xl font-maiandra mt-2 mb-12 tracking-[14px]'>COMING <br /> SOON</h2>
                <p className='text-lg tracking-[1px] max-w-[589px] mx-auto'>Join our newsletter to be the first to know when Gold Circle launches and receive updates on our latest development</p>
                <form onSubmit={(e) => e.preventDefault()} className='flex gap-3 justify-center max-w-[625px] mx-auto mt-16'>
                    <input type="email" placeholder='Email Address' className='text-sm border border-[#F8F8F8] rounded-[4px] text-[#F8F8F899] bg-transparent py-3 px-4 grow' />
                    <button className='text-sm border border-[#F9B74E] rounded-[4px] w-[148px] text-[#f9b74e]'>Subscribe</button>
                </form>
            </div>
            <div className='border-t border-t-[#F9B74E] py-4 mt-24'>
                <img src={appLogo2} className='h-[55px] mx-auto block' alt="" />
            </div>
        </main>
    )
}

export default ComingSoon;