import { combineReducers } from 'redux';
import maintenance from './maintenance';
import line from './line'
import section from './section';
import bagian from './bagian'
import problem from './problem'
import penyebab from './penyebab'
import jenisPerbaikan from './jenisPerbaikan'
import mttr from './mttr'
import subBagian from './subBagian';
export default combineReducers({
maintenance,
line,
section,
bagian,
penyebab,
problem,
jenisPerbaikan,
mttr,
subBagian
});

