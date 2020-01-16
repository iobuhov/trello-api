import { Service } from 'typedi';

import { Model, ModelItem } from './Model';

export interface Card extends ModelItem {
    name: string;
    description: string;
    estimate: string;
    status: string;
    dueDate: string;
    labels: string[];
}

@Service()
export class CardModel extends Model<Card> {
    constructor() {
        super('cards');
    }
}

export default CardModel;
