
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Footer = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div>
             <div className='App'>
      <span>{text}</span>
      <Cursor cursorColor='red' />
    </div>
        </div>
    );
};

export default Footer;