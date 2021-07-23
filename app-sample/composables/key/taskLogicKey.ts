import { InjectionKey } from '@vue/composition-api';
import { taskLogicStore } from '../store/taskLogic';

const taskLogicKey: InjectionKey<taskLogicStore> = Symbol('TaskLogicStore');
export default taskLogicKey;
