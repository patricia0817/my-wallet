import React, { useEffect, useRef } from 'react'

function FlashMessages( props ) {
  const flashMessage = useRef( null )


  function deleteNotification() {
    flashMessage.current.remove()
  }


  return (
    <div>
      { props.messages.map( ( msg, index ) => {
        return (
          <div key={ index } ref={ flashMessage } className={ "notification is-light " + `${ msg.messageType }` }>
            <button className="delete" onClick={ deleteNotification }></button>
            { msg.value }
          </div>
        )
      } ) }
    </div>
  )
}

export default FlashMessages