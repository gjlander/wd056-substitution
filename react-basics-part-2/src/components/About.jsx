import Button from './Button';

const bgColor = 'skyblue';
const inlineStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
};
const condition = [];

const About = () => {
    return (
        <section style={inlineStyles} id='about'>
            <h1>I&apos;m the about section!</h1>
            <Button text='Click me too!' />
            {condition && condition.length ? (
                <p>I render if the condition is true or truthy</p>
            ) : (
                <p>I render if the condition is false or falsy</p>
            )}
        </section>
    );
};

export default About;
