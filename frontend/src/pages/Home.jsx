import React from 'react'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <section className='heading'>
            <h1>What do you need help with?</h1>
            <h1>Please choose from an option below</h1>
        </section>

        <Link to ='/new-ticket'  className='btn btn-reverse btn-block'>
            <FaQuestionCircle /> Create New Ticket

        </Link>
        <Link to ='/tickets'  className='btn  btn-block'>
            <FaTicketAlt /> View my Ticket

        </Link>

    </>
  )
}

export default Home