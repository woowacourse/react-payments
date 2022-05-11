import styled from '@emotion/styled';

const CardFront = styled.div(({ color }: { color?: string }) => ({
  padding: '14px',

  background: color || '#e5e5e5',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  // type
  '& .type': {
    fontSize: '10px',
    marginBottom: '14px',
  },

  // chip
  '& .chip': {
    width: '40px',
    height: '26px',
    marginBottom: '16px',

    background: '#cbba64',
    borderRadius: '4px',
  },

  // number
  '& .number': {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '6px',
    minHeight: '16px',
  },

  // info
  '& .info': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    alignItems: 'center',
    '.expired-period': {
      letterSpacing: '-1px',
    },
  },
}));

export default CardFront;
