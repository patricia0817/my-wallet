import Axios from 'axios'
import moment from 'moment'

async function getUserService() {
  try {
    const response = await Axios.get( 'https://banking-app-1e647.firebaseio.com/0.json' );


    return {
      ...response.data,
      transactions: [ ...response.data.transactions ].map( ( transaction ) => {
        return {
          ...transaction,
          date: moment().subtract( Math.floor( Math.random() * 7 ), 'days' )
        }
      } ).sort( ( current, next ) => {
        let comparison = 0
        if ( moment( current.date ).isBefore( next.date ) ) {
          comparison = 1
        } else if ( moment( current.date ).isAfter( next.date ) ) {
          comparison = -1
        }
        return comparison
      } ).map( entry => mapUserEntity( entry ) )
    }
  } catch ( e ) {
    console.log( 'There was a problem: ', e )
  }
}

function mapUserEntity( entity ) {
  return {
    amount: entity.amount,
    category: entity.category,
    date: new Date( entity.date ),
    merchant: entity.merchant
  }
}

export default getUserService