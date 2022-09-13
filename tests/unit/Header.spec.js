import Header from '../../src/components/Header.vue'
import {render, screen} from '@testing-library/vue'



it('has Dashboard Header', () =>{
  render(Header);
  const header = screen.queryByRole('heading', {name: 'Sign Up'});
  expect(header).not.toBeNull();
})