import Record from '@home/components/Records/Record.jsx'
import Cards from '@home/components/Cards/cards.jsx'
import Buttons from '@home/components/buttons/buttons.jsx'


export default function Dashboard() {
    return (
        <section id="main-content">
            <Cards />
            <Buttons />
            <Record />
        </section>
    )
}