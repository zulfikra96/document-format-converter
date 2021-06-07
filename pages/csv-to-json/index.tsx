import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Link from "next/link"

interface State {
    value: string,
    results: Array<object>
}


export default class CsvToJson extends React.Component<any, State>{

    constructor(props: AppProps) {
        super(props)
        this.state = {
            value: '',
            results: []
        }
    }

    pushDataToObject = (attr: Array<any>, data_set: Array<any>): void => {
        let data_bind: any = []
        data_bind = data_set.map(e => {
            const obj: any = {}
            const value_split = e.split(",");
            attr.forEach((e, i) => {
                obj[e] = value_split[i]
            })
            return obj;
        })
        this.setState({ results: data_bind });
    }

    getValueOfString = () => {
        const string_value: string = this.state.value
        if (string_value === "") return;
        if (typeof string_value !== "string") alert("Invalid CSV");
        let attr: Array<any> = []
        let data_set: Array<any> = []
        const first_line: Array<any> = string_value.split(/\n/);
        attr = first_line[0].split(",");
        delete first_line[0];
        first_line.forEach(e => data_set.push(e))
        this.pushDataToObject(attr, data_set)
    }

    render = () => (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-row">
                <div className="flex mt-10">
                        <Link href="/">
                            <a className="blue">Back</a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row">
                    
                    <div className="flex-1  p-4 ">
                        <textarea className="w-full border-2" onChange={(val) => this.setState({ value: val.target.value })} placeholder="CSV String" name="" id="" cols={30} rows={20}></textarea>
                    </div>
                    <div className="flex-1  p-4 ">
                        <textarea className="w-full border-2" placeholder="Result" readOnly={true} value={JSON.stringify(this.state.results, undefined, 4)} name="" id="" cols={30} rows={20}></textarea>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1">
                        <button onClick={this.getValueOfString.bind(this)} className="bg-red-200 p-3 rounded-md">Generate</button>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={this.getValueOfString.bind(this)} className="bg-red-200 p-3 rounded-md">Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}