import { Flex, Box, Badge, Text, Button } from '@chakra-ui/react'
import React, { useReducer } from 'react'

enum Actions {
  inc,
  dec,
  reset
}

type StateType = {
  current: number
  previous: number
}

type AllActions =
  | { type: Actions.inc; payload: number }
  | { type: Actions.dec; payload: number }
  | { type: Actions.reset }

const neverError = (token: string, event: never) => {
  throw new Error(`Should never happen ${token} :: ${event}`)
}

const reducer = (state: StateType, action: AllActions) => {
  switch (action.type) {
    case Actions.inc: {
      return { ...state, previous: state.current, current: state.current + action.payload }
    }
    case Actions.dec: {
      return { ...state, previous: state.current, current: state.current - action.payload }
    }
    case Actions.reset: {
      return { current: 0, previous: 0 }
    }
    default:
      neverError('oops', action)
  }

  return state
}

const State = () => {
  const [state, dispatch] = useReducer(reducer, { current: 0, previous: 0 })

  return (
    <Box>
      <Flex align="baseline" mt={2} justify="center">
        <Badge variantColor="pink">Plus</Badge>
        <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Flex align="baseline" mt={2} justify="center">
        <Text ml={1} fontsize="sm">
          <b>{state.current}</b> (190)
        </Text>
      </Flex>
      <Flex align="baseline" mt={2} justify="space-around">
        <Button colorScheme="blue" size="md" onClick={() => dispatch({ type: Actions.dec, payload: 1 })}>
          Minus
        </Button>
        <Button colorScheme="blue" size="md" onClick={() => dispatch({ type: Actions.inc, payload: 1 })}>
          Plus
        </Button>
      </Flex>
    </Box>
  )
}

export default State
