import {INOrg} from 'inorg';
import useScript from './useScript';

export default function useInorg(callback: () => void) {
    useScript('/lib/softin.js', 'softin');
    useScript('/lib/inorginfo.js', 'inorginfo');
    useScript('/lib/inorg.js', 'inorg', callback);
}
