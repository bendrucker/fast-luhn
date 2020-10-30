import {expectType} from 'tsd';
import luhn from '.';
 
expectType<boolean>(luhn(''));
