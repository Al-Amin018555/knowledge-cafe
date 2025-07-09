import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-5 border-b'>
            <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header; 