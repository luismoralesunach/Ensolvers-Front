export interface Note {
    id: number;
    text: string;
    labels?: string[]
}

export type CreateNote = Omit<Note, 'id'>