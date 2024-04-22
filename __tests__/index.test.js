import genDiff from '../src/index.js';

test('test 1', () => {
  const res = genDiff('file1.json', 'file2.json');
  expect(genDiff('file1.json', 'file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
/* '
{
    age: 38
  - children: ["Sergey", "Masha"]
  + children: ["Masha", "Misha", "Varya"]
  - name: Leha
  + name: Sasha
  - surname: Alekseev
  + surname: Aleksandrov
    wife: Alyona
}
' */
