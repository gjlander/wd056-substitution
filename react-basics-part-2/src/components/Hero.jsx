import Button from './Button';

const Hero = () => {
    return (
        <section id='hero'>
            <h1>I&apos;m the hero section!</h1>
            <Button text='Click me!' />
            <label htmlFor='my-input'>An input</label>
            <input onChange={(e) => console.log(e)} id='my-input' type='text' />
        </section>
    );
};

export default Hero;
