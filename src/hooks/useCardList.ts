import { CardExcludeInput } from './../types/Card';
import { useCallback, useEffect, useReducer } from 'react';
import { isJSONArray } from '../utils/util';
import { Card, CardInput } from '@/types/Card';
export const enum CardListReducerActionType {
  ADD_CARD = 'ADD_CARD',
  CHANGE_ALIAS = 'CHANGE_ALIAS',
  UPDATE_CARD = 'UPDATE_CARD',
}

interface AddCardAction {
  type: CardListReducerActionType.ADD_CARD;
  payload: {
    id: string;
    cardInput: CardInput;
  };
}

interface ChangeAliasAction {
  type: CardListReducerActionType.CHANGE_ALIAS;
  payload: CardExcludeInput;
}

interface UpdateCardAction {
  type: CardListReducerActionType.UPDATE_CARD;
  payload: {
    id: string;
    cardInput: CardInput;
  };
}

type CardListAction = AddCardAction | ChangeAliasAction | UpdateCardAction;

const defaultCardList: Card[] = isJSONArray(localStorage.getItem('cardList') as string)
  ? (JSON.parse(localStorage.getItem('cardList') as string) as Card[])
  : [];

export type CardListState = Card[];
export type CardListDispatch = React.Dispatch<CardListAction>;
export type GetCard = (id: string) => Card | undefined;

const cardListReducer = (state: CardListState, action: CardListAction) => {
  const { type } = action;

  switch (type) {
    case CardListReducerActionType.ADD_CARD: {
      const {
        payload: { id, cardInput },
      } = action;

      return [
        ...state,
        {
          id,
          alias: '',
          ...cardInput,
        },
      ];
    }

    case CardListReducerActionType.CHANGE_ALIAS: {
      const {
        payload: { id, alias },
      } = action;

      return state.map((card) => {
        if (card.id === id) {
          return { ...card, alias };
        }
        return card;
      });
    }

    case CardListReducerActionType.UPDATE_CARD: {
      const {
        payload: { id, cardInput },
      } = action;

      return state.map((card) => {
        if (card.id === id) {
          return { ...card, id, ...cardInput };
        }
        return card;
      });
    }
  }
};

export const useCardList = (): [CardListState, CardListDispatch, GetCard] => {
  const [cardList, cardListDispatch] = useReducer(cardListReducer, defaultCardList);

  useEffect(() => {
    localStorage.setItem('cardList', JSON.stringify(cardList));
  }, [cardList]);

  const getCard = useCallback(
    (cardId: string) => {
      return cardList.find(({ id }) => id === cardId);
    },
    [cardList],
  );

  return [cardList, cardListDispatch, getCard];
};
