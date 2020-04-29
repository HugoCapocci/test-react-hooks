import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './use-fetch';

describe('useFetch', () => {
    it('Should return error if response status is 404', async () => {
        window.fetch = jest.fn().mockResolvedValue({
            status: 404
        });
        const { result, waitForNextUpdate } = renderHook(() => useFetch('fakeUrl'));

        expect(window.fetch).toHaveBeenCalledWith('fakeUrl');
        expect(result.current.loading).toBe(true);
        expect(result.current.result).not.toBeDefined();
        expect(result.current.error).not.toBeDefined();
  
        await waitForNextUpdate();

        expect(result.current.loading).toBe(false);
        expect(result.current.result).not.toBeDefined();
        expect(result.current.error).toEqual('not found');
    });

    it('Should return result if call is successfull', async () => {
        window.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue('fakeResult')
        });

        const { result, waitForNextUpdate } = renderHook(() => useFetch('fakeUrl'));
        await waitForNextUpdate();

        expect(result.current.loading).toBe(false);
        expect(result.current.result).toEqual('fakeResult');
        expect(result.current.error).not.toBeDefined();
    });
});
