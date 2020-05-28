import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Modules from '../screens/modules';
import Ques1 from '../screens/Ques1'
import Ques2 from '../screens/Ques2'
import Ques3 from '../screens/Ques3'
import Ques4 from '../screens/Ques4'
import Ques5 from '../screens/Ques5'

import Quess1 from '../screens/Module1.js/Quess1'
import Quess2 from '../screens/Module1.js/Quess2'
import Quess3 from '../screens/Module1.js/Quess3'
import Quess4 from '../screens/Module1.js/Quess4'
import Quess5 from '../screens/Module1.js/Quess5'
import result1 from '../screens/Module1.js/Module1Result'
import Answer from '../screens/Module1.js/Answer'

import Qu1 from '../screens/Module2/Qu1'
import Qu2 from '../screens/Module2/Qu2'
import Qu3 from '../screens/Module2/Qu3'
import Qu4 from '../screens/Module2/Qu4'
import Qu5 from '../screens/Module2/Qu5'
import Answer2 from '../screens/Module2/Answer2'
import Result2 from '../screens/Module2/Result2'

const screens = {
  Home: {
    screen: Home,
  },
  Modules: {
    screen: Modules,
  },
  Quess1: {
    screen: Quess1,
  },
  Quess2: {
    screen: Quess2,
  },
  Quess3: {
    screen: Quess3,
  },
  Quess4: {
    screen: Quess4,
  },
  Quess5: {
    screen: Quess5,
  },
  result1: {
    screen: result1,
  },
  Answer: {
    screen: Answer,
  },
  Qu1: {
    screen: Qu1,
  },
  Qu2: {
    screen: Qu2,
  },
  Qu3: {
    screen: Qu3,
  },
  Qu4: {
    screen: Qu4,
  },
  Qu5: {
    screen: Qu5,
  },
  Result2: {
    screen: Result2,
  },
  Answer2: {
    screen: Answer2}
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import Home from '../screens/home';
// import Modules from '../screens/modules';
// import Ques1 from '../screens/Ques1'
// import Ques2 from '../screens/Ques2'
// import Ques3 from '../screens/Ques3'
// import Ques4 from '../screens/Ques4'
// import Ques5 from '../screens/Ques5'

// import Quess1 from '../screens/Module1.js/Quess1'

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   Modules: {
//     screen: Modules,
//   },
//   Quess1: {
//     screen: Quess1,
//   },
//   Ques2: {
//     screen: Ques2,
//   },
//   Ques3: {
//     screen: Ques3,
//   },
//   Ques4: {
//     screen: Ques4,
//   },
//   Ques5: {
//     screen: Ques5,
//   },
// };

// // home stack navigator screens
// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);


