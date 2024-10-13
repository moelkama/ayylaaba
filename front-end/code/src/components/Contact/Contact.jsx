import Deliciousness from '../Home/Deliciousness';
import Contact_Form from './Contact_Form';
import Check_out from './Check_out';

export default function Contact() {
    return (
        <>
            <Contact_Form />
            <Deliciousness />
            <Check_out title="Check out the delicious recipe"/>
        </>
    )
}