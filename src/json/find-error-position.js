import parse from './parse';

export default function findErrorPosition(jsonString, dataPath) {
  // console.log(JSON.stringify(parse(jsonString), null, 2));
  // TODO: Handle json pointer escape notation and better error handling
  const { meta: { line, column } } = dataPath
    .split('/')
    .slice(1)
    .reduce(
      (obj, pointer) => obj.value[pointer] || obj.value.value[pointer],
      parse(jsonString)
    );

  return { line, column };
}
