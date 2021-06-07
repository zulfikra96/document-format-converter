import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Link from "next/link"

interface State {
  value: string,
  results: Array<object>
}


export default class Home extends React.Component<any, State>{

  constructor(props: AppProps) {
    super(props)
  }

  render = () => (
    <div className="flex justify-center h-screen flex-col " >
      <div className="flex justify-center flex-row">
        <Link href="/csv-to-json">
          <a>
            <div className="p-4 border-2">
              CSV To JSON
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}