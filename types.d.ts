interface startingTicketData {
  _id?: string;
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: string;
  category: string;
}
interface TicketId {
  params: {
    id: string;
  };
}
