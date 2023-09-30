import { ApiResponse } from "src/type/api/auth";

export function withToastForError<Args, Response extends ApiResponse>(
  payloadCreator: (args: Args) => Promise<Response>,
) {
  return async (args: Args, { rejectWithValue }: any) => {
    try {
      const response: Response = await payloadCreator(args);
      if (response.status !== 200) {
        return rejectWithValue(response.msg);
      }
    } catch (err: any) {
      return rejectWithValue(err);
    }
  };
}