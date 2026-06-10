import fetch from 'node-fetch';

async function test() {
  const res = await fetch('http://localhost:3000/api/git/status?projectId=default');
  console.log('Status:', res.status);
  console.log('Headers:', res.headers.raw());
  const text = await res.text();
  console.log('Body:', text.slice(0, 100));
}

test();
