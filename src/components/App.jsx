import { Profile } from './Profile/Profile';
// import { Statistics} from './Statistics/Statistics'
import user from '.././data/user.json'
import stats from '../data/stats.json'
import Statistics from './Statistics/Statistics';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json'

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '20px'
      }}
    >

      <Profile user= {user}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
   <Statistics title="Upload stats" stats={stats} /> 
      <FriendList friends={friends}/>
       <TransactionHistory items= {transactions}/> 
    </div>
  );
};
